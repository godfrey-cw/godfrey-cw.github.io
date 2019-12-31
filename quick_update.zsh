#!/usr/bin/zsh -f
bundle exec jekyll build && \
    git add . && \
    git commit -m "auto-commit by quick_update.zsh" && \
    git push;

cp -r ./_site/* ~/Documents/Web/UWWebsite/;

cd ~/Documents/Web/UWWebsite/;

git add . && \
    git commit -m "auto-commit by quick_update.zsh" && \
    git push origin && \
    git push live;

