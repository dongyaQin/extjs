function getEnv(a) {
        var q = 10,
        w = a,
        n, m = w.length,
        f = new Date(),
        b = 1385813354678,
        c = b % q,
        h = (b - c) / q;
        if (c < 1) {
            c = 1
        }
        c = b % q;
        var d = b % (q * q);
        h = (b - d) / q;
        h = h / q;
        d = (d - c) / q;
        var z = b + "",
        p = z.charAt(q),
        g = c + "" + d + "" + p,
        l = Number(g),
        e = l * Number(w),
        x = e + "",
        k = "";
        for (n = (e + "").length - 1; n >= 0; n--) {
            var o = x.charAt(n);
            k = k + o
        }
        var i = p + k + d + c,
        y = i.length,
        j = 0,
        r = "",
        v = "";
        for (j = 0; j < y; q++) {
            r = r + i.charAt(j);
            j = j + 2
        }
        for (j = 1; j < y; j = j + 2) {
            v = v + i.charAt(j)
        }
        var u = r + v;
        u = i;
        var t = 0,
        s = "";
        for (t = 0; t < u.length; t++) {
            s = s + u.charAt(t)
        }
        return u
    }
    alert(getEnv(320439));
    alert(new Date().getTime())