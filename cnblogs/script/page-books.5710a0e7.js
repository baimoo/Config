/*最后更新时间2021-10-22 12:57:46*/
(self.webpackChunkCnblogs_Theme_SimpleMemory = self.webpackChunkCnblogs_Theme_SimpleMemory || []).push([[4463], {
    5349: function (e, a, i) {
        "use strict";
        i.r(a), i.d(a, {
            default: function () {
                return n
            }
        });
        var t = i(9035), o = i(2755);

        function n(e) {
            (0, o.default)(e), (() => {
                if (e.__config.bookList.length) {
                    let a = $("#cnblogs_post_body"), i = "";
                    $.each(e.__config.bookList, (a => {
                        let t = e.__config.bookList[a];
                        t.title && (i += "<h1>" + t.title + "</h1>"), i += '<div class="book-cards">', $.each(t.books, (a => {
                            let o = '<div class="book-card"> <div class="content-wrapper"> <img src="##cover##" alt="" class="book-card-img"> <div class="card-content"> <div class="book-name" title="##name##">##name##</div> <div class="rate"> <fieldset class="rating book-rate"> ##scoreHtml## </fieldset> <span class="book-voters card-vote"> ##infoHtml## </span> </div> </div> </div> <div class="book-by"> <i class="iconfont icon-book" title="阅读时间" style="display:##readDateStyle##"></i> ##readDate## <i class="iconfont icon-schedule" title="阅读进度" style="display:##readPercentageStyle##"></i> ##readPercentage## </div> </div>',
                                n = t.books[a], s = "";
                            void 0 !== n.score && n.score > 0 ? (s += '<i class="iconfont icon-pingjixingquanxing"></i>'.repeat(parseInt(n.score)), n.score > parseInt(n.score) && (s += '<i class="iconfont icon-pingjixingbanxing"></i>'), s += '<i class="iconfont icon-pingjixingxiantiao"></i>'.repeat(parseInt(5 - n.score))) : s += '<i class="iconfont icon-pingjixingxiantiao"></i>'.repeat(5);
                            let r = "";
                            void 0 !== n.formerName && n.formerName && (r += '<span title="' + n.formerName + '">原　名：' + n.formerName + "</span><br>"), void 0 !== n.author && n.author && (r += '<span title="' + n.author + '">作　者：' + n.author + "</span><br>"), void 0 !== n.translator && n.translator && (r += '<span title="' + n.translator + '">译　者：' + n.translator + "</span><br>"), void 0 !== n.press && n.press && (r += '<span title="' + n.press + '">出版社：' + n.press + "</span><br>"), void 0 !== n.year && n.year && (r += '<span title="' + n.year + '">出版年：' + n.year + "</span><br>"), void 0 !== n.remark && n.remark && (r += '<span class="bm-book-remark" title="' + n.remark + '">备　注：' + n.remark + "</span>");
                            let c = void 0 !== n.readDate ? n.readDate : "", l = c ? "initial;" : "none",
                                d = void 0 !== n.readPercentage ? n.readPercentage : "", p = d ? "initial;" : "none";
                            o = e.__tools.batchTempReplacement(o, [["cover", void 0 !== n.cover ? n.cover : ""], ["name", void 0 !== n.name ? n.name : ""], ["readDate", c], ["readDateStyle", l], ["readPercentage", d], ["readPercentageStyle", p], ["scoreHtml", s], ["infoHtml", r]]), i += o
                        })), i += "</div>"
                    }));
                    let t = $(".articleSuffix-flg");
                    t.length ? t.before(i) : a.append(i)
                }
            })(), (0, t.Z)(e)
        }
    }
}]);