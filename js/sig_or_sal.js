function sig_or_sall () {
    try {
        if(confirm("Можете сделать объект, и покупать или продавалть акци")) {
            if(confirm("Покупа")) {
                if(confirm("Прежде чем покупать, надо войти, или зарегестриро")) {
                    if(confirm("Войт")) {
                        var use_us1 = {
                            use_us1_i1: {
                                use_us1_i1_nm1:"igo",
                                use_us1_i1_sr1:"romanen",
                                use_us1_i1_ag1:"19"
                            }
                        };
                        if(use_us1.hasOwnProperty("use_us1_i1.use_us1_i1_nm1") == true && use_us1.hasOwnProperty("use_us1_i1.use_us1_i1_sr1") == true) {
                            if(confirm("Можете вой")) {
                                if(confirm("Введите своё им")) {
                                    var use_i1_nm1;
                                    var use_i1_sr1;
                                    var use_i1_ag1;
                                    use_i1_nm1 = prompt("Введите совё им");
                                    if(use_i1_nm1 != use_us1.use_us1_i1.use_us1_i1_nm1 && use_i1_nm1 != use_us1.use_us1_i1.use_us1_i1_sr1) throw new Error("У вас ошибка, поле не может быть пуст");
                                    else if(use_i1_nm1 == use_us1.use_us1_i1.use_us1_i1_nm1 && use_i1_nm1 != use_us1.use_us1_i1.use_us1_i1_sr1) {
                                        use_i1_sr1 = prompt("Введите свою фамил");
                                        if(use_i1_sr1 != use_us1.use_us1_i1.use_us1_i1_sr1 && use_i1_sr1 != use_us1.use_us1_i1.use_us1_i1_nm1) throw new Error("У вас ошибка, поле не может быть пуст");
                                        else if(use_i1_sr1 == use_us1.use_us1_i1.use_us1_i1_sr1 && use_i1_sr1 != use_us1.use_us1_i1.use_us1_i1_nm1) {
                                            use_i1_ag1 = prompt("Введите свой возра");
                                            if(use_i1_ag1 != use_us1.use_us1_i1.use_us1_i1_ag1 && use_i1_ag1 != use_us1.use_us1_i1.use_us1_i1_sr1) throw new Error("У вас ошибка, поле не может быть пуст");
                                            else if(use_i1_ag1 == use_us1.use_us1_i1.use_us1_i1_ag1 && use_i1_ag1 != use_us1.use_us1_i1.use_us1_i1_sr1) {
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } else {
                if(confirm("Продава")) {
    
                }
            }
        }
    }
    catch(e) {
        if(confirm("Можете зарегестрировать свой i")) {
            if(confirm("Введите своё им")) {
                var us_i1_nm1;
                var us_i1_sr1;
                var us_i1_ag1;
                us_i1_nm1 = prompt("Введите своё им");
                if(us_i1_nm1 != use_us1.use_us1_i1.use_us1_i1_nm1 && us_i1_nm1 != use_us1.use_us1_i1.use_us1_i1_sr1) {
                    us_i1_sr1 = prompt("Введите свою фамил");
                    if(us_i1_sr1 != use_us1.use_us1_i1.use_us1_i1_sr1 && us_i1_sr1 != use_us1.use_us1_i1.use_us1_i1_nm1) {
                        us_i1_ag1 = prompt("Введите своё возра");
                        if(us_i1_ag1 != use_us1.use_us1_i1.use_us1_i1_ag1 && us_i1_ag1 != use_us1.use_us1_i1.use_us1_i1_nm1) {
                            if(confirm("Ваш id созда")) {
                                if(confirm("Можем его сохра")) {
                                    if(confirm("Вы подтверждае")) {
                                        Object.defineProperty(use_us1, "use_us1_i1_nm2", {value:us_i1_nm1, writable:true, enumerable:true, configurable:true});
                                        if(use_us1.hasOwnProperty("use_us1_i1_nm2") == true && use_us1.use_us1_i1_nm2 != use_us1.use_us1_i1.use_us1_i1_nm1) {
                                            Object.defineProperty(use_us1, "use_us1_i1_sr2", {value:us_i1_sr1, writable:true, enumerable:true, configurable:true});
                                            if(use_us1.hasOwnProperty("use_us1_i1_sr2") == true && use_us1.use_us1_i1_sr2 != use_us1.use_us1_i1.use_us1_i1_sr1) {
                                                Object.defineProperty(use_us1, "use_us1_i1_ag2", {value:us_i1_ag1, writable:true, enumerable:true, configurable:true});
                                                if(use_us1.hasOwnProperty("use_us1_i1_sr2") == true && use_us1.use_us1_i1_ag2 != use_us1.use_us1_i1.use_us1_i1_ag1) {
                                                    if(confirm("Ваш id сохра")) {
                                                        if(confirm("Можете войт")) {
                                                            if(confirm("Здравствуйт" + " " + use_us1use_us1_i1_nm2 + " " + use_us1.use_us1_i1_sr2)) {
                                                                if(confirm("Можете поукпать и продавать акци")) {
                                                                    if(confirm("Посмотреть список акци")) {
                                                                        var use_i1_desc1 = {
                                                                            use_i1_desc1_tx1:"appl",
                                                                            use_i1_desc1_tx2:"samsun",
                                                                            use_i1_desc1_tx3:"microso",
                                                                            use_i1_desc1_tx4:"windo",
                                                                            use_i1_desc1_tx5:"googl"
                                                                        };
                                                                        if(use_i1_desc1.hasOwnProperty("use_i1_desc1_tx1") == true && use_i1_desc1.hasOwnProperty("use_i1_desc1_tx3") == true) {
                                                                            if(confirm("Посмотре")) {
                                                                                var use_i1_des1;
                                                                                for(var i in use_i1_desc1) {
                                                                                    use_i1_des1 = use_i1_des1[i];
                                                                                }
                                                                                if(confirm("Вот список акци" + " " + use_i1_des1[i])) {
                                                                                    if(confirm("Можете посмотреть свой бала")) {
                                                                                        if(confirm("Это платная функц")) {
                                                                                            
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}