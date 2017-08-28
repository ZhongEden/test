//jQuery是为处理HTML事件而特别设计的，当遵循以下原则时，代码会更恰当且更易维护
//①把所有jQuery代码处于事件处理函数中
//②把所有事件处理函数置于文档就绪事件处理器中
//③把Jquery代码置于单独的.js文件中
//④如果存在名称冲突，则重命名jQuery库

//$(function(){}) = $(document).ready(function(){})
$(function () {
    'use strict';
//使用pageInit事件取代 jQuery DOM ready 事件, 因为不管页面是直接载入或者是通过Ajax调用都能够触发。
//该事件在 1.4.0 版本后已废弃，使用 pagecreate 替代。
//为了性能考虑，最好通过 document 代理监听。
    $(document).on("pageInit", "#page-datetime-picker", function(e) {
        $("#datetime-picker").datetimePicker({
            toolbarTemplate: '<header class="bar bar-nav">\
      <button class="button button-link pull-right close-picker">确定</button>\
      <h1 class="title">选择日期和时间</h1>\
      </header>'
        });
        $("#datetime-picker1").datetimePicker({
            toolbarTemplate: '<header class="bar bar-nav">\
      <button class="button button-link pull-right close-picker">确定</button>\
      <h1 class="title">选择日期和时间</h1>\
      </header>'
        });
    });

    $(document).on('click','.create-actions', function () {
            var buttons1 = [
                {
                    text: '请选择',
                    label: true
                },
                {
                    text: '新建',
                    onClick: function() {
                        location.href="../P11_新建请假申请.html";
                    }
                },
                {
                    text: '管理',
                    onClick: function() {
                        window.location.href = "请假申请（管理）_引导页.html";
                    }
                }
            ];
            var buttons2 = [
                {
                    text: '取消',
                    bg: 'danger'
                }
            ];
            var groups = [buttons1, buttons2];
            $.actions(groups);
        });

    //审批操作
    $(document).on('click','.sp-actions', function () {
        console.log("请假审批");
        var btn1 = [
            {
                text: '请选择',
                label: true
            },
            {
                text: '通过',

                onClick: function() {

                }
            },
            {
                text: '不通过',
                onClick: function() {
                    $.alert("不通过");
                }
            },
            {
                text:'回退',
                onClick: function () {
                    $.alert("回退");
                }
            }
        ];
        var btn2 = [
            {
                text: '取消',
                bg: 'danger'
            }
        ];
        var group = [btn1, btn2];
        $.actions(group);
    });

    //添加备注
    $(document).on('click','.note',function(){
        var note = document.getElementById('id-note');
        note.style.visibility = 'visible';
    });

    $(document).on('click','.note-modal', function () {
        $.modal({
            title:  '备注',
            verticalButtons: true,
            buttons: [
                {
                    text: '特殊情况，昨晚加班',
                    onClick: function() {
                        $.alert('备注成功',function(){
                            window.location.href = 'P5_打卡_备注.html';
                        });
                    }
                },
                {
                    text: '特殊情况，请假一天',
                    onClick: function() {
                        $.alert('备注成功',function(){
                            window.location.href = 'P5_打卡_备注.html';
                        });
                    }
                },
                {
                    text: '其他',
                    onClick: function() {
                        $.prompt('其他：',
                            function (value) {
                                $.alert('备注成功！',function(){
                                    window.location.href = 'P5_打卡_备注.html';
                                });

                            },
                            function (value) {

                            }
                        );
                    }
                },
                {
                    text: '取消',
                    close:true
                }
            ]
        })
    });



    //三个按钮的更多
    $(document).on('click','.more-actions', function () {
        console.log("请假审批");
        var btn1 = [
            {
                text: '请选择',
                label: true
            },
            {
                text: '不通过',
                //color: 'danger',

                onClick: function() {

                }
            },
            {
                text:'回退',

                onClick: function () {
                    $.alert("回退");
                }
            }
        ];
        var btn2 = [
            {
                text: '取消',
                bg: 'danger'
            }
        ];
        var group = [btn1, btn2];
        $.actions(group);
    });


    //确认框
    $(document).on('click','.confirm-ok', function () {
        $.confirm('确定退出当前编辑吗', function () {
            window.history.go(-1);

        });
    });

    $(document).on('click','.alert-text',function () {
        $.alert('提交成功！');
    });

    $(document).on('click','.daily-managment', function () {
        var buttons1 = [
            {
                text: '请选择',
                label: true
            },
            {
                text: '请假',
                onClick: function() {
                    $.alert("");
                }
            },
            {
                text: '打卡',
                onClick: function() {
                    $.alert("");
                }
            },
            {
                text: '外勤',
                onClick: function() {
                    $.alert("");
                }
            },
            {
                text: '出差',
                onClick: function() {
                    $.alert("");
                }
            }
        ];
        var buttons2 = [
            {
                text: '取消',
                bg: 'danger'
            }
        ];
        var groups = [buttons1, buttons2];
        $.actions(groups);
    });


    $.init();
});