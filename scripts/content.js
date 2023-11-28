const lines = document.getElementsByClassName("result_list_line");

if (lines.length > 0) {
    for (let i = 0; i < lines.length; i++) {
      let course_name = lines[i].getElementsByClassName("tasklist-course")
      const task_name = lines[i].getElementsByClassName("tasklist-title")
      let task_url = task_name[0].getElementsByTagName("a")[0].href
      let task_id = task_url.split("/")[6].split("?")[1].split("&")[0].split("=")[1]
      base_url = "https://scombz.shibaura-it.ac.jp/lms/course?idnumber="
      course_name[0].innerHTML = `<a href="${base_url}${task_id}">${course_name[0].innerHTML}</a>` 
    }
}
