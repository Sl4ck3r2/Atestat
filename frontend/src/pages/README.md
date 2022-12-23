# Folder structure
The entry point is `route.tsx` file. You should add/edit/remove/configure routes
from there.

# Convention
The folders naming isn't really functional it is more "human-readable".

I propose to match folders names with actual routes to not get messed and
to know which file for which route stands for - everytime read `routes.tsx` file.

## Examples

1. For route `/project` create `project/index.tsx` file
2. For route for a specific project `/project/:projectId` create `project/_projectId/index.tsx`
3. Nested variables example: `/project/:projectId/daily/:dailyId` path will be `project/_projectId/daily/_dailyId/index.tsx`

Couple of rules here. 
1. Each path variable you declare in `routes.tsx` in specific route must match with path as for `projectId` in example above.
2. In `routes.tsx` we declare variables using `:` but folders are named using `_` at the beginning
   1. Why? Because in that case you `WebStorm` understand path correctly in tracebacks, and you can jump right to the errors using `CTRL` key
3. Each page should be a folder with `index.tsx` file in it. DON'T DO `project/_projectId.tsx`, DO `project/_projectId/index.tsx` instead
4. When you need to apply some styles to a specific page create `index.module.scss` file near it. (`project/_projectId/index.module.scss`)

Following these rules you can easily read and understand which page for each path relates to
and which variables it could potentially have.
