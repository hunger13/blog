;
(function() {
    var Model = {
        message: null,
        init: function() {
            var APP_ID = 'jc5MrPbEhx4gKkGrCkPicHqR-gzGzoHsz';
            var APP_KEY = '3ja2nWWQD3WnQvM9IDT7fnLi';
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            });
            var Message = AV.Object.extend('message');
            this.message = new Message()
        },
        save: function(name, contnet) {
            this.message.set('name', name);
            this.message.set('content', contnet);
            return this.message.save()
        },
        feach: function() {
            var query = new AV.Query('message');
            return query.find()
        }

    }

    var View = {
        list: null,
        form: null,
        init: function() {
            this.list = document.querySelector("#messageList")
            this.form = document.querySelector("#messageForm")
        },
        addList: function(n, c) {
            let li = document.createElement('li')
            li.innerText = `${n}: ${c}`
            this.list.appendChild(li)
        }
    }

    var Controller = {
        model: null,
        view: null,
        init: function(model, view) {
            this.model = model
            this.view = view
            this.model.init()
            this.view.init()
            this.display()
            this.bindEvents()
        },
        saveMessage: function() {
            let c = this.view.form.querySelector('input[name=content]').value
            let n = this.view.form.querySelector('input[name=name]').value
            if (c.length < 1 || n.length < 1) {
                alert('用户名或内容不能为空')
                return
            }
            this.model.save(n, c).then((obj) => {
                this.view.form.querySelector('input[name=content]').value = null
                this.view.addList(obj.attributes.name, obj.attributes.content)
            })
        },
        bindEvents: function() {
            this.view.form.addEventListener('submit', (e) => {
                e.preventDefault()
                this.saveMessage()
            })
        },
        display: function() {
            this.model.feach().then((obj) => {
                obj.forEach(element => {
                    this.view.addList(element.attributes.name, element.attributes.content)

                });

            })
        }


    }
    Controller.init(Model, View)
})()