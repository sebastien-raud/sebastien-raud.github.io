const code = `
[[let]] isOk = true;

if (a == 2) {
  [[console]].log('toto');
} else if (a == 3 && isOk) {
  isOk = !isOk;
}
`;

export default {
    code,
    lang: 'javascript'
};