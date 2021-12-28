s = (n, f) => {
  while (n < 2 << 11) f[n]++, (n += n & -n);
};
g = (i, f, r = 1) => {
  while (i) (r += f[i]), (i &= --i);
  return --r;
};
smaller = (a, b = a.reverse``, f = new Uint16Array(2 << 11), r = []) =>
  b.map((e) => s(-4 + (2 << 9) + e, f) || r.push(g(-5 + (2 << 9) + e, f))) && r.reverse``;
