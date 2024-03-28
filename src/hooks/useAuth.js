import { useSelector } from 'react-redux';

import { selectUser } from '../pages/auth/redux/authSlice';

const useAuth = () => {
  const user = useSelector(selectUser);
  let isMentor = false;
  let isStudent = false;
  let status = 'student';

  if (user) {
    isMentor = user.username === 'mentor';
    isStudent = user.username === 'student';

    if (isMentor) status = 'mentor';
    if (isStudent) status = 'student';

    return {
      username: user.username,
      role: user.role,
      status,
      isMentor,
      isStudent,
    };
  }

  return { username: '', role: null, isMentor, isStudent, status };
};
export default useAuth;
