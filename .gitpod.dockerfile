FROM gitpod/workspace-full

ARG NODEJS_VERSION_MAJOR=12
ARG YARN_VERSION=1.22.5-1

USER root

RUN a2dismod mpm_event

RUN apt-get update && apt-get upgrade -y && apt-get install -y mysql-server php-xmlrpc php-pdo-mysql

# Install Node.js
RUN apt-get install -y curl ca-certificates apt-transport-https --no-install-recommends && \
	curl -sL https://deb.nodesource.com/setup_${NODEJS_VERSION_MAJOR}.x | bash - \
    && apt-get update \
	&& apt-get install -y nodejs
	
# Install Yarn
RUN mkdir -p /var/cache/yarn
RUN apt install -y gnupg2
RUN	curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && apt install -y yarn=${YARN_VERSION}
	
# Mark packages as hold, i.e. staying at given version
RUN apt-mark hold yarn 

RUN echo "include \${GITPOD_REPO_ROOT}/gitpod_config/apache/apache.conf" > /etc/apache2/apache2.conf
RUN echo ". \${GITPOD_REPO_ROOT}/gitpod_config/apache/envvars" > /etc/apache2/envvars

RUN echo "!include \${GITPOD_REPO_ROOT}/gitpod_config/mysql/mysql.cnf" > /etc/mysql/my.cnf

RUN mkdir /var/run/mysqld
RUN chown gitpod:gitpod /var/run/apache2 /var/lock/apache2 /var/run/mysqld

RUN addgroup gitpod www-data
