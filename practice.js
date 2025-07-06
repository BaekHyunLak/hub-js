function print(a) {console.log(a)};
async function getGitHubUserProfile(BaekHyunLak) {
    try{
        const respone = await fetch('https://api.github.com/users/BaekHyunLak');
        if(!respone.ok){
            throw new Error(`HTTP error status : ${respone.status}`)
        }
        const data = await respone.json();
        print("Đã nhận được dữ liệu");
        return data;
    }catch(error) {
        print(` Phát hiện lỗi : ${error} `);
        throw error;
    } finally{
        print("Đã phân tích dữ liệu xong");
    }
}

async function run() {
    try{
        const result = await getGitHubUserProfile();
        print(`Login : ${result.login}`);
        print(`ID : ${result.id}`);
        print(`public_repos : ${result.public_repos}`);
        print(`avatar : ${result.avatar_url}`);
       
    } catch(error){
        print(` catch error here : ${error}`);
    } finally{
        print("In thành công");
    }
}
run();
print("Bắt đầu chạy");