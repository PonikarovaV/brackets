module.exports = function check(str, bracketsConfig) {
    let strConfig = bracketsConfig.map( el => { 
        return el.join('');
    });
    function checkString(string) {
        if (string === '') {
          return true;
        }
        if (string !== '') {
            let findPair = strConfig.find( el => {
                if (string.includes(el)) {
                return el;
                }
            });
    
            if (findPair === undefined) {
                return false;
            } else {
                return checkString(string.replace(findPair, ''));
            }
        }
    }
    return checkString(str);
}
