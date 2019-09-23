#!/usr/bin/zsh -f

# Copy the dist folder to the web repo, then push
# to github and the live site

cp -r ./docs/.vuepress/dist/* ../UWWebsite/;
echo "copying dist folder to website repo";
cd ../UWWebsite/;
echo "cd-ing to "; pwd;
git add .; git commit -m 'automated commit';
git push origin; git push live;
cd ../UWWebsiteDev;
echo "cd-ing back to "; pwd;
