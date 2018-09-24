# Deployment

If you have followed the [infrastructure configuration steps](infrastructure.md), the the system is configured to automatically deploy using Codeship to AWS Cloudfront! 

> TL/DR of below - just merge to `master` or `develop` and its automatic.

## Details

For a bit more detail - in order to trigger a deployment, the process is as follows:

1. Open a Pull Request on Github from your feature branch.
2. The system will either be in the process of testing, or have completed testing your feature branch - wait for it to complete.
3. If Codeship testing passes, a [Codecov.io](https://codecov.io) report should appear informing you of coverage changes.
4. If all the above is fine, and you're happy with the state of the merge, hit the `Merge` button.
5. Don't forget to delete your source branch.
6. If your PR was targetted to a branch that will trigger a deployment (`master` and `develop` on our current configuration) then CodeShip will rerun the build post
   integration and trigger a deploy. Once the deploy to S3 is complete, it will then invalidate the cache on CloudFront. 
7. Give it a minute or two (depending on how long it takes to build and test the project) and force refresh your browser on the site - your updates should be visible!