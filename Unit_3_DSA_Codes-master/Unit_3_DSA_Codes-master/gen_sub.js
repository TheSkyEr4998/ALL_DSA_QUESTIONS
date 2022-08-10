
function subs(s, cur) {
    if (s == "") {
        console.log(cur)
        return
    }

    let cur_l = s[0]

    cur = cur + cur_l
    subs(s.slice(1), cur)
    cur = cur.slice(0, cur.length - 1)
    subs(s.slice(1), cur)
}
subs("abcde", "")
