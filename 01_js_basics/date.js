let date1 = new Date()
date_data = date1.toLocaleString('en-IN', {
    hour: "2-digit",
    minute:"numeric",
    second:"2-digit"
})
console.log(date_data)