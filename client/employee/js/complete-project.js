const token = localStorage.token 
let user = localStorage.user

function checkData(){
    if(!user || !token){
        window.location.href = '../../index.html'
    }
}

window.onload = checkData

user = JSON.parse(localStorage.user)
function loadData(){
    axios.get(`http://127.0.0.1:3000/api/v1/projects/user/${user.id}`, {
        headers: {
            'Content-Type': 'application/json',
            'authorization_token': token
        }
    })
    .then((response)=>{
        const errorEl = document.querySelector('.error')
        const projectInfo = document.querySelector('.project-info')
        let projectHtml = ''
        errorEl.style.display = "none"
        let complete = response.data.user_projects.filter((project)=>{
            return project.is_completed == 1
        })

        if(complete.length <= 0){
            const errorEl = document.querySelector('.error-message')
            const projectInfo = document.querySelector('.project-info')
            errorEl.innerHTML = "No projects"
            projectInfo.style.display = "none"
        }else{

            complete.forEach((project)=>{
                projectHtml += `
                    <div class="project-card">
                        <div class="top">
                            <h4>${project.project_name}</h4>
                            <div class="btn">
                                
                            </div>
                        </div>
                        <div class="middle">
                            <p>
                                ${project.project_description}
                            </p>
                        </div>
                        <div class="bottom">
                        <div class="right">
                            <small>${new Date(project.start_date).toLocaleDateString()}</small>
                        </div>
                        
                        </div>
                    </div>
                `
            })
            projectInfo.innerHTML = projectHtml
        }
        
    })
    .catch((e)=>{
        
        console.log(e);
        if(e){
            const errorEl = document.querySelector('.error-message')
            const projectInfo = document.querySelector('.project-info')
            errorEl.innerHTML = e.response.data.error ?? e.message
            projectInfo.style.display = "none"
        }
        else if(e?.message){
            const errorEl = document.querySelector('.error-message')
            const projectInfo = document.querySelector('.project-info')
            errorEl.innerHTML = e.message
            projectInfo.style.display = "none"
        } 
    })
}

loadData()


function logOut(){
    localStorage.setItem('user', '')
    localStorage.setItem('token', '')
    window.location.href='../../index.html'
}

document.querySelector('.logout').addEventListener('click', ()=>{
    logOut()
})