import Swal from 'sweetalert2';
import 'animate.css/animate.css';

import { ONG_COLORS } from '../../consts/const';

import './alertService.css';

export function CardAlertService (payload) {
  const {icon, title, text} = payload;

  return Swal.fire({
      icon,
      title: `<div class='${icon}'>${title}</div>`,
      text,
      confirmButtonColor: ONG_COLORS.BLUE,
      allowOutsideClick: false,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
}

export function ToastAlertService (payload) {
  const {icon, title, text} = payload;

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    showCloseButton: true,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  });

  return Toast.fire({
    icon,
    title,
    text,
  })
}