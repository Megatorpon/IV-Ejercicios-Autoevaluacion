const { Etcd3 } = require('etcd3');
const client = new Etcd3();

(async () => {
  const valorFoo = await client.get('foo').string();
  console.log('foo es:', valorFoo);

  await client.delete().all();
})();
