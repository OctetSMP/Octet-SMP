var un = localStorage.getItem('un');
var pw = localStorage.getItem('pw');
var uuid = localStorage.getItem('uuid');

if (un !== null && pw !== null && uuid === null) {
    findRowWhere(un, pw, 'account').then(row => {
        if (row !== -1) {
            readCell(row, 5, 'account').then(value => {
                fetch(`https://api.mojang.com/users/profiles/minecraft/${un}`)
                    .then(res => res.json())
                    .then(data => {
                        if (data && data.id) {
                            localStorage.setItem('uuid', data.id);
                        }
                    });
            });
        }
    });
}