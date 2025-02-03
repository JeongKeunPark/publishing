// input 창에 글자를 넣으면 등록 버튼 활성화

document.querySelector(".oflaA").addEventListener("input", () => {
    if (document.querySelector(".oflaA").value.trim().length > 0) {
        document.querySelector(".CurrentTextAreaSection__SubmitButton-sc-1l5sqeb-5").classList.add("hMkcjB");
        document.querySelector(".CurrentTextAreaSection__SubmitButton-sc-1l5sqeb-5").classList.remove("FEhZA");
    } else {
        document.querySelector(".CurrentTextAreaSection__SubmitButton-sc-1l5sqeb-5").classList.remove("hMkcjB");
        document.querySelector(".CurrentTextAreaSection__SubmitButton-sc-1l5sqeb-5").classList.add("FEhZA");
    }
});
// input 창에 글자를 넣으면 등록 버튼 활성화
