let studentId = prompt('შეიტანე სტუდენტის აიდი', '');
document.querySelectorAll('[data-student-id = "' + studentId + '"]').forEach(el => el.style.background = 'green');