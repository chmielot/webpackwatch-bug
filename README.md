# Repository to reproduce webpack watch bug

This is intended to reproduce the issue in [https://github.com/webpack/webpack/issues/8734](https://github.com/webpack/webpack/issues/8734).

1. Run `npm i`
2. Run `npm run dev` which will start `webpack --watch`

Compilation will fail, because we try to assign `null` to the `identifier` property in `Main.ts`. Using a union type in `Types.ts` by changing `identifier: string;` to `identifier: string | null;` fixes this issue. Unfortunately, the `webpack --watch` process does not recompile at all, it doesn't detect the change. Even when we force it to recompile by making a change in `Main.ts`, it seems like it is using an old (cached?) version of `Types.ts`, because it complains about the same error as before.

However, if we use an exported function from `Types.ts` in `Main.ts` it all works well. In order to verify uncomment the call to `testfunc()` in `Main.ts`. Recompilation is triggerd and webpack reacts immediately to changes of the `identifier` type.