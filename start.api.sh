export API_RUN_ENV=http://ha.app.qc.zycus.net:53680/einvoice/soa-services/restapi

rm -rf ./output

#npm i

./node_modules/.bin/codeceptjs run -c codecept.conf.js