export API_RUN_ENV=https://api.github.com
export API_TOKEN=b4e4801ac59bc670d4eabf4ec16b7149c52e3a19

rm -rf ./output

#npm i

./node_modules/.bin/codeceptjs run -c codecept.conf.js