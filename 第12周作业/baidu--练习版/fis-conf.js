 // 追加忽略名单：.bak,.log,.project在构建的时候忽略
 fis.set('project.ignore', ['node_modules/**', 'output/**', 'fis-conf.js','*.bak','*.log','*.project']);

// 所有的文件产出到 static/ 目录下
fis.match('*', {
    release: '/static/$0'
});

// 所有模板放到 tempalte 目录下
fis.match('*.html', {
    release: '/template/$0'
});

var now = new Date();
fis.set('new date', [now.getFullYear(), now.getMonth()+1, now.getDate(), now.getHours(),now.getMinutes()].join(''));

//发布 fis3 release prod，进行合并、压缩等优化,发布 fis3 release 不做压缩不做合并
// optimize
fis.media('prod')
	//对图片加 md5戳
	.match('*.{png,jpg,gif}', {
	      useHash: true
	})
	//对js,css加时间戳
	.match('*.{js,css}', {
      query: '?=t' + fis.get('new date')
	})
	//压缩js
    .match('*.js', {
        optimizer: fis.plugin('uglify-js')
    })
    //压缩css
    .match('*.css', {
        optimizer: fis.plugin('clean-css', {
            'keepBreaks': true //保持一个规则一个换行
        })
    });

// pack
fis.media('prod')
    // 启用打包插件，必须匹配 ::package
    .match('::package', {
        packager: fis.plugin('map'),
        spriter: fis.plugin('csssprites', {
            layout: 'matrix',
            margin: '15'
        }),
        //基于页面的打包方式
        postpackager: fis.plugin('loader', {
	    allInOne: true
	  })
    });


// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
  spriter: fis.plugin('csssprites')
})

// 对 CSS 进行图片合并
fis.match('*.css', {
  // 给匹配到的文件分配属性 `useSprite`
  useSprite: true
});

