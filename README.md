# Typo3 + MySQL + Gitpod

[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/itx-informationssysteme/one-day-at-itx)

## Full web dev (front- and backend) environment in a browser

## Prerequisites

1. [Sign up for gitpod.io](https://gitpod.io/login)

## Try it out

1. Click on the following link [https://gitpod.io/#https://github.com/itx-informationssysteme/one-day-at-itx](https://gitpod.io/#https://github.com/itx-informationssysteme/one-day-at-itx)
2. Your environment is being prepared, wait about 40 seconds (A splash screen will appear)
3. VScode (or Theia depending on your settings) IDE will be displayed.
4. Note that one terminal is running sudo docker-up, and another terminal in parallel is running ddev start
5. Find your website's URL with `gp url 8080`
6. Open your website's URL (should be [http://localhost:8080](http://localhost:8080)) in a browser, you should see a PHP info screen.
7.  🎉

## TYPO3 CMS Base Distribution

**Setup:**

To start an interactive installation, you can do so by executing the following
command and then follow the wizard:

```
php vendor/bin/typo3cms install:setup
```

**Setup unattended (optional):**

If you're a more advanced user, you might want to leverage the unattended installation.
To do this, you need to execute the following command and substitute the arguments
with your own environment configuration.

```
php vendor/bin/typo3cms install:setup \
    --no-interaction \
    --database-user-name=root \
    --database-host-name=127.0.0.1 \
    --database-port=3306 \
    --database-name=testdb \
    --use-existing-database \
    --admin-user-name=admin \
    --admin-password=password \
    --site-setup-type=site
```
