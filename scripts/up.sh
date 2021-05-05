#!/bin/bash
files=$(find . -name "package.json" -not -path "*/node_modules/*" -not -path "*/dist/*" -not -path "*/build/*")
base=$(pwd)
params=$@
if [ -z "${params}" ]; then
  params="-ui"
fi
for f in ${files}; do
  cd $(dirname ${f})
  yarn ncu ${params}
  cd ${base}
done

node scripts/fix-versions.js
