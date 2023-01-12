#!/bin/bash -eu

export MSYS_NO_PATHCONV=1

(
  cd "$(dirname "${BASH_SOURCE:-0}")"

  docker build -t npm ./docker

  docker run -it --rm \
    --mount "type=bind,src=$(pwd)/,dst=/workdir/chrome-extension" \
    -w /workdir/chrome-extension \
    npm "$@"
)
