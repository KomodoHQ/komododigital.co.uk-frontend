# Content

In order to handle content and content updates - there are 4 scenarios to consider. 

_I have just updated content in WordPress and need that content to be reflected on the site_

The solution to this is either a WordPress post-commit hook or full-fledged plugin, which when a post is saved triggers a call to the Codeship API to rebuild the project. When the rebuild is triggered, the updated content will be re-pulled from WordPress, and be reflected on the website.

_I have just updated the page content in markdown or UI elements and need it to be reflected on the site_

As these files are all housed in git, this is managed entirely by the standard commit, push, pull request and merge process we employ for development (i.e. Git-flow). As soon as a merge to develop / master is made, this will automatically trigger a rebuild and deploy from Codeship.

_What about drafts?_

Right now, it appears our WordPress API isn't surfacing drafts as part of its API response, but this needs to be 100% confirmed. Once corrected, we can leverage GraphQL to check the post_status of a post (and see if it's publish, draft or something else). Based on that, we could, for example, show drafts on the staging environment but not in production - or we could have a dedicated environment that is only available internally to review drafts before they go to the web.

In the case of markdown, we can put something in the frontmatter to denote a draft, and then apply the same rules as agreed above.

_I want to trigger a manual build because reasons_

At any point, triggering a build on Codeship of a particular branch will result in a full build and deploy. Therefore, manual builds are just a case of login to Codeship, and hit the Rebuild button next to a previous build.