// prerequisites: 설치된 라이브러리
const { DefaultAzureCredential } = require('@azure/identity');
const { SecretClient } = require('@azure/keyvault-secrets');

const credential = new DefaultAzureCredential();
const vaultName = process.env.KEY_VAULT_NAME;
const kvUrl = `https://jenkinstoken.vault.azure.net`;
const client = new SecretClient(kvUrl, credential);

async function getSecretValue(secretName: string) {
  const secret = await client.getSecret(secretName);
  return secret.value;
}

// 사용 예시:
async function main() {
  const names = ['AppApiKey', 'DbPassword', 'ThirdSecret']; // 외부에서 받아온 이름들
  for (const name of names) {
    const val = await getSecretValue(name);
    console.log(`>> ${name} = ${val}`);
  }
}

main().catch(console.error);
