# Lerna tests

This is a project for doing some tests about whole lerna workflow.

## Useful commands


- To trigger a new publish without having to add any change:
```
lerna publish --force-publish
```

- To select a automatically a version type and put ouput in file:
```
lerna publish patch --force-publish --yes >> lerna-output.txt
```

## Publish packages

Before publishing:
```
npm login
```

If your packages are public, remember to remove the private flag in package.json of project root:
```
"private": true,
```

And just execute this command:
```
lerna publish
```
## Troubleshooting

- To undo a version before publish in registry, you need to checkout changes and remove new created tag

- As npm registry only allows unpublish in the 48h next hours, if you want to simulate before doing real things, you can always setup a local npm registry. In this [example](https://www.adaltas.com/en/2021/01/11/js-monorepos-versioning-publishing/), they use [Verdaccio](https://verdaccio.org/)

-  Solving error "You must sign up for private packages"

    If you find this during the process:
    ```
    lerna ERR! E402 You must sign up for private packages
    ```

    If you plan to make this public, remember that in scoped projects is private by default. You can check the current access level doing this:
    ```
    npm config get access
    ```
    Receiving private or null means that you have to set public access in npm:
    ```
    npm config set access public
    ```
- Solving error "Scope not found". If you get this message:
    ````
    lerna ERR! E404 Scope not found
    ````
    You should only use scopes related with your user or organization. You can create an organization [here](https://www.npmjs.com/org/create) or check some docs [there](https://docs.npmjs.com/organizations)

### References

- https://www.aspecto.io/blog/lerna-hello-world-how-to-create-a-monorepo-for-multiple-node-packages/

- https://www.adaltas.com/en/2021/01/11/js-monorepos-versioning-publishing/
