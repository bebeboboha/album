// make sure to set this synchronously immediately after loading Vue
Vue.config.devtools = true
    // Initialize Firebase
var config = {
    apiKey: "AIzaSyAhdlF76mmQKj2H_-83HvtTDt-QxXt6bSM",
    authDomain: "album-3ab70.firebaseapp.com",
    databaseURL: "https://album-3ab70.firebaseio.com",
    projectId: "album-3ab70",
    storageBucket: "album-3ab70.appspot.com",
    messagingSenderId: "200446114899"
};

firebase.initializeApp(config);
var db = new firebase.database();

var starCountRef = firebase.database().ref('product');
starCountRef.on('value', function(snapshot) {
    //updateStarCount(postElement, snapshot.val());
    var productss = snapshot.val();
    var demo = new Vue({
        el: '#demo',
        data: {
            productss,
            picked: 'All'
        },
        methods: {
        },
        computed: {
            products: function() {
                if (this.picked == 'All') {
                    return this.productss
                } else if (this.picked == 'Flower') {
                    var array = []
                    var p = Object.values(productss)
                    for (var i = 0; i < p.length; i++) {
                        if (p[i].type == 'flower') {
                            array.push(p[i])
                        }
                    }
                    return array;
                } else if (this.picked == 'Butterfly') {
                    var array = []
                    var p = Object.values(productss)
                    for (var i = 0; i < p.length; i++) {
                        if (p[i].type == 'butterfly') {
                            array.push(p[i])
                        }
                    }
                    return array;
                } else if (this.picked == 'Ice') {
                    var array = []
                    var p = Object.values(productss)
                    for (var i = 0; i < p.length; i++) {
                        if (p[i].type == 'ice') {
                            array.push(p[i])
                        }
                    }
                    return array;
                }else if (this.picked == 'Sky') {
                    var array = []
                    var p = Object.values(productss)
                    for (var i = 0; i < p.length; i++) {
                        if (p[i].type == 'sky') {
                            array.push(p[i])
                        }
                    }
                    return array;
                }
            }
        }
    })
});

