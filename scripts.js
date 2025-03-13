document.getElementById('imageUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imageUrl = e.target.result;
            addItem(imageUrl, "未知藏品", "描述待填充");
        };
        reader.readAsDataURL(file);
    }
});

function uploadImage() {
    // 这里可以添加实际的上传逻辑，例如使用Fetch API发送图片到服务器
    alert("图片已上传，正在识别...");
    setTimeout(() => {
        addItem("https://via.placeholder.com/100", "三星 Galaxy Note7", "2016年绝版机，珊瑚蓝颜色");
    }, 2000); // 模拟延迟
}

function addItem(imageUrl, name, description) {
    const container = document.getElementById('items-container');
    const itemCard = document.createElement('div');
    itemCard.className = 'item-card';
    
    const img = document.createElement('img');
    img.src = imageUrl;
    
    const details = document.createElement('div');
    details.className = 'details';
    
    const itemName = document.createElement('h2');
    itemName.textContent = name;
    
    const itemDescription = document.createElement('p');
    itemDescription.textContent = description;
    
    details.appendChild(itemName);
    details.appendChild(itemDescription);
    
    itemCard.appendChild(img);
    itemCard.appendChild(details);
    
    container.appendChild(itemCard);
}
