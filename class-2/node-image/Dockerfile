FROM alpine
LABEL maintainer="reysmerwvr@gmail.com"

# Step 2: Download and install dependency

RUN addgroup -S node && adduser -S node -G node

RUN apk add -U sudo curl bash ca-certificates openssl ncurses coreutils python2 make gcc g++ libgcc linux-headers grep util-linux binutils findutils && \
    echo '%wheel ALL=(ALL) ALL' > /etc/sudoers.d/wheel && adduser node wheel && \
    touch ~/.bashrc

USER node

RUN curl -qo- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash && \
    echo 'export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"' >>~/.bashrc && \
    echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm' >>~/.bashrc && \
    source ~/.bashrc && nvm install --lts && nvm use --lts

# Step 3: Tell the image what to do when it starts as container

CMD ["nvm"]