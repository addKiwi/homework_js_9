document.getElementById('tabs').addEventListener('click', show);

function show(event) {
    if (event.target.className === 'tabs-title') {
        let dataMenu = event.target.getAttribute('data-target');
        let tabM = document.getElementsByClassName('tabs-title');
        for (let i = 0; i < tabM.length; i++) {
            tabM[i].classList.remove('active');
        }
        event.target.classList.add('active');
        console.log(dataMenu);
        let tabContent = document.getElementsByClassName('tab-con');
        for (let i = 0; i < tabContent.length; i++) {
            let dataContent = tabContent[i].dataset.target;
            if (dataMenu === dataContent) {
                tabContent[i].classList.add('activec');
            } else {
                tabContent[i].classList.remove('activec');
            }
        }
    }

}





/*function funcShowTabs(event) {
    if (event.target.className === 'tab-title') {
        let dataMenu = event.target.getAttribute('data-target');
        let tabM = document.getElementsByClassName('tab-title');
        for (let i = 0; i < tabM.length; i++) {
            tabM[i].classList.remove('active');
        }
        event.target.classList.add('active');
        let tabContent = document.getElementsByClassName('tab-con');
        for (let i = 0; i < tabContent.length; i++) {
            let dataContent = tabContent[i].dataset.target;
            if (dataMenu === dataContent) {
                tabContent[i].classList.add(active);
            } else {
                tabContent[i].classList.remove(active);
            }
        }
    }

};*/