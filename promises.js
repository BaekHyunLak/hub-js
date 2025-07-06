function print(a) {
    console.log(a);
}
function randomTask() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
              let a = Math.floor(Math.random() * 11);
        const succes = a > 5;
        if(succes){
            resolve(`Pass condition ${a}`);
        } else{
            reject(`Error with function ${a}`);
        }
        }, 2000)
    });
}

/**randomTask() 
    .then((data) => {
        console.log("đã duyệt", data);
    })
    .catch((error) => {
        console.log("gặp lỗi", error);
    })
    .finally(() =>{
        console.log("Done");
    });
 console.log("Bắt đầu chạy tác vụ")
*/
// Học về async/await
/**
 * một hàm được đánh dấu bằng async thì hàm sẽ trả về promises
 * Nếu ko trả về promises thì Js sẽ tự động bọc giá trị đó vào một promises đã được resolved 
*/ 
async function test_async() {
    print("Start test");
    const result = await randomTask();
    print(result);
}


async function Async(){
    print("Bắt đầu asynchronous")
    return new Promise((res,rej) => {
        setTimeout(() => {
            let a = Math.floor(Math.random() * 10);
            const succes = a > 0.5;
            if(succes){
                res(` Tỉ lệ thành công ${a}` );
            } else{
                rej(new Error(` Có lỗi xảy ra với ${a}`));
            }
        });  
    });
}

async function asyncreturn() {
    try{
        print("Bắt đầu thử : ");
        const result = await Async();
        print(`Thanhf công : ${result}`);
        const test2 = await Async();
        print(`test lần 2 : ${test2}`);
    } catch(error){
        print(`Gawpj lỗi ${error}`);
    } finally{
        print("Done async");
    }
}



async function fetchData() {
    print("Bắt đầu fetch dữ liệu");
    try{
        const respone = await fetch('https://api.github.com/users/google');
        //fetch là công cụ để gửi request đến một web hay API gì đó để lấy thông tin
        if(!respone.ok){
            throw new Error (`HTTP error! status : ${respone.status}`);
        }
        const data = await respone.json();
        //json chuyển đổi một chuỗi JSON thành một đối tượng hoặc mảng JS để có thể dễ dàng truy cập các thuộc tính
        print(`Dữ liệu đã được nhận ${data.name}`);
        return data;
    }catch(error){
        print("Error while fetch",error.message);
        throw error;
    }  finally {
        print("quá trình fetch đã end");
    }
}
// gọi hàm và xử lí kết quả
fetchData()
    .then(data => {
        print(`Fetch thành công : ${data.name}`);
    }) 
    .catch(error => {
        print("có lỗi : ",error.message);
    })

print("Lệnh này chạy ngay sau khi fechdata() được gọi")    ;