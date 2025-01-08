import axios from "axios";
import ResetPassword from "../pages/ForgotPassword/ResetPassword/ResetPassword";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

export const useApi = () => ({
  // Auth functions
  
  signin: async (username, password) => {
    const response = await api.post('/auth/login', { username, password });
    return response.data;
  },
  logout: async () => {
    const response = await api.post('/auth/logout');
    return response.data;
  },
  validateToken: async (token) => {
    const response = await api.post('/auth/validatetoken', {token});
    return response.data;
  },

  // User functions

  registerUsers: async (name, username, email, password, role, storegeData) => {
    try {
      const response = await api.post(
        '/auth/adduser', 
        { 
          name, username, email, password, role 
        },
        {
          headers: {
            'Authorization': `Bearer ${storegeData}`
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error('Erro ao registrar o usuário:', error.response || error);
      return false;
    }
  },
  updateUsers: async (id, name, username, email, storegeData) => {
    try {
      const response = await api.put(
        `/auth/updateuser/${id}`,
        {
          name,
          username,
          email,
        },
        {
          headers: {
            'Authorization': `Bearer ${storegeData}`
          }
        }
      );
      return response.status === 200; 
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error.response || error);
      return false; 
    }
  },
  listUsers: async (token) => {
      const response = await api.get('/show/admin/allusers', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      return response.data
  },
  listUsersById: async (id, token) => {
    const response = await api.get(`/show/admin/userid/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    return response.data
  },
  deleteUsers: async (id, storegeData) => {
    try {
      const response = await api.delete(
        `/auth/admin/deleteuser/${id}`,
        { 
          headers: {
            'Authorization': `Bearer ${storegeData}`
          }
        }
      );
  
      return response; 
    } catch (error) {
      console.error('Erro ao excluir usuário:', error);
      throw error; 
    }
  },

  showUser: async (token) => {
    const response = await api.get('/auth/me', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    return response.data
  },

  showUserById: async (id, token) => {
    const response = await api.get(`/show/admin/userid/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    return response.data
  },

  updatePassword: async (id, newPassword, storegeData) => {
    try {
        const response = await api.patch(
            `/auth/updateusersingle/${id}`,
            { password: newPassword },
            {
                headers: {
                    'Authorization': `Bearer ${storegeData}`,
                },
            }
        );
        return response.status === 200; 
    } catch (error) {
        console.error('Erro ao atualizar a senha:', error.response || error);
        return false; 
    }
  },


  // Secretary functions

  listSecretaries: async (token) => {
    try {
      const response = await api.get('/show/admin/allsecretaries', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      return response.data
    } catch (error) {
      console.error('Erro ao listar secretários:', error);
      throw error;
    }
  },

  // Teacher functions

  listTeachers: async (token) => {
    try {
      const response = await api.get('/show/admin/allteachers', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return response.data
    } catch (error) {
      console.error('Erro ao listar professores:', error);
      throw error;
    }
  },
  // Student functions

  registerStudent: async (enrollment, name, storegeData) => {
    try {
      const response = await api.post(
        '/register/student', {
          enrollment, name
        },
        {
          headers: {
            'Authorization': `Bearer ${storegeData}`
          }
        }
      );
      return response.data
    } catch (error) {
      console.error('Erro ao registrar aluno:', error.response ? error.response.data : error.message);
      throw new Error('Não foi possivel registrar o aluno. Tente novamente mais tarde.');
    }
  },
  updateStudents: async (enrollment, name, storegeData) => {
    try {
      const response = await api.put(
        `update/student/${enrollment}`,
        { 
          enrollment, name
        },
        {
          headers: {
            'Authorization': `Bearer ${storegeData}`
          }
        }
      );
      return response.status === 200;
    } catch (error) {
      console.error('Erro ao atualizar o estudante: ', error.response || error);
      return false;
    }
  },
  listStudents: async (token) => {
    try {
      const response = await api.get('/show/student', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      return response.data
    } catch (error) {
      console.error('Erro ao listar estudantes:', error);
      throw error;
    }
  },
  listStudentByEnrollment: async (enrollment, token) => {
    try {
      const response = await api.get(`/show/student/${enrollment}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return response.data
    } catch (error) {
      console.error('Erro ao listar estudante:', error);
      throw error;
    }
  },
  deleteStudents: async (enrollment, storegeData) => {
    try {
      const response = await api.delete(
        `/delete/student/${enrollment}`,
        {
          headers: {
            'Authorization': `Bearer ${storegeData}`
          }
        }
      );
      return response;
    } catch (error) {
      console.error('Erro ao excluir estudante:', error);
      throw error;
    }
  },

  // Classroom functions

  registerClassroom: async (classRoom, students, storegeData) => {
    try {
      const response = await api.post(
        '/register/classroom', {
          classRoom, students
        },
        {
          headers: {
            'Authorization': `Bearer ${storegeData}`
          }
        }
      );
      return response.data
    } catch (error) {
      console.error('Erro ao registrar turma:', error.response ? error.response.data : error.message);
      throw new Error('Não foi possivel registrar a turma. Tente novamente mais tarde.');
    }
  },
  updateClassroom: async (idClass, students, storegeData) => {
    console.log(idClass, students, storegeData)
    try {
      const response = await api.patch(
        `/update/classroom/${idClass}`,
        {
          students
        },
        {
          headers: {
            'Authorization': `Bearer ${storegeData}`
          }
        }
      );
      return response.status === 200;
    } catch (error) {
      console.error('Erro ao atualizar turma:', error.response || error);
      return false;
    }
  },
  listAllClassroom: async (token) => {
    try {
      const response = await api.get('/show/classroom', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })  
      return response.data
    } catch (error) {
      console.error('Erro ao listar turmas:', error);
      throw error;
    }
  },
  listClassroomById: async (id, token) => {
    console.log(id)
    try {
      const response = await api.get(`/show/classroom/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return response.data
    } catch (error) {
      console.error('Erro ao listar turma:', error);
      throw error;
    }
  },
  deleteClassroom: async (idClass, storegeData) => {
    try {
      const response = await api.delete(
        `/delete/classroom/${idClass}`,
        {
          headers: {
            'Authorization': `Bearer ${storegeData}`
          }
        });
      return response;
    } catch (error) {
      console.error('Erro ao excluir turma:', error);
      throw error;
    }
  },

  // ClassMaker functions
  registerClassMaker: async (name, storegeData) => {
    try {
      const response = await api.post(
        '/register/classmaker', {
          name
        },
        {
          headers: {
            'Authorization': `Bearer ${storegeData}`
          }
        }
      );

      return response.data
    } catch (error) {
      console.error('Erro ao registrar sala maker:', error.response ? error.response.data : error.message);
      throw new Error('Não foi possivel registrar sala maker. Tente novamente mais tarde.');
    }
  },

  listClassMaker: async (token) => {
    try {
      const response = await api.get('/show/classmaker', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })  
      return response.data
    } catch (error) {
      console.error('Erro ao listar salas maker:', error);
      throw error;
    }
  },

  updateClassMaker: async (id, name, storegeData) => {
    try {
      const response = await api.put(
        `/update/classmaker/${id}`,
        {
          name
        },
        {
          headers: {
            'Authorization': `Bearer ${storegeData}`
          }
        }
      );
      return response.status === 200;
    } catch (error) {
      console.error('Erro ao atualizar sala maker:', error.response || error);
      return false;
    }
  },
  
  deleteClassMaker: async (id, storegeData) => {
    try {
      const response = await api.delete(
        `/delete/classmaker/${id}`,
        {
          headers: {
            'Authorization': `Bearer ${storegeData}`
          }
        });
      return response;
    } catch (error) {
      console.error('Erro ao excluir turma:', error);
      throw error;
    }
  },

  // Input Output functions

  registerInputOutput: async (name, horarioEntrada, horarioSaida, teacherId, classroomId, makerClassroomId, storegeData) => {
    try {
      const response = await api.post(
        '/register/inputoutput', {
          name, horarioEntrada, horarioSaida, teacherId, classroomId, makerClassroomId
        },
        {
          headers: {
            'Authorization': `Bearer ${storegeData}`
          }
        }
      );
      return response.data
    } catch (error) {
      console.error('Erro ao registrar entrada e saída:', error.response ? error.response.data : error.message);
      throw new Error('Não foi possivel registrar entrada e saída. Tente novamente mais tarde.');
    }
  },
  listAllInputOutput: async (token) => {
    try {
      const response = await api.get('/show/all/inputoutput', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return response.data
    } catch (error) {
      console.error('Erro ao listar entrada e saída:', error);
      throw error;
    }
  },
  listInputOutputById: async (id, token) => {
    try {
      const response = await api.get(`/show/inputoutput/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return response.data
    } catch (error) {
      console.error('Erro ao listar entrada e saída:', error);
      throw error;
    }
  },
  updateInputOutput: async (id, name, horarioEntrada, horarioSaida, teacherId, classroomId, makerClassroomId, storegeData) => {
    try {
      const response = await api.put(
        `/update/inputoutput/${id}`, {
          name, horarioEntrada, horarioSaida, teacherId, classroomId, makerClassroomId
        },
        {
          headers: {
            'Authorization': `Bearer ${storegeData}`
          }
        }
      );
      return response.status === 200;
    } catch (error) {
      console.error('Erro ao atualizar entrada e saída:', error.response || error);
      return false;
    }
  },
  deleteInputOutput: async (id, storegeData) => {
    try {
      const response = await api.delete(
        `/delete/inputoutput/${id}`,
        {
          headers: {
            'Authorization': `Bearer ${storegeData}`
          }
        });
      return response;
    } catch (error) {
      console.error('Erro ao excluir entrada e saída:', error);
      throw error;
    }
  },

  // Activity functions

  registerActivity: async (name, value, inputOutputId) => {
    try {
      const response = await api.post(
        '/register/activity', {
          name, value, inputOutputId
        }
      );
      return response.data
    } catch (error) {
      console.error('Erro ao registrar atividade:', error.response ? error.response.data : error.message);
      throw new Error('Não foi possivel registrar atividade. Tente novamente mais tarde.');
    }
  },
  listAllActivity: async (token) => {
    try {
      const response = await api.get('/show/all/activity', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return response.data
    } catch (error) {
      console.error('Erro ao listar atividades:', error);
      throw error;
    }
  },
  listActivityById: async (id, token) => {
    try {
      const response = await api.get(`/show/activity/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return response.data
    } catch (error) {
      console.error('Erro ao listar atividade:', error);
      throw error;
    }
  },
  updateActivity: async (id, name, value, inputOutputId) => {
    try {
      const response = await api.put(
        `/update/activity/${id}`, {
          name, value, inputOutputId
        }
      );
      return response.status === 200;
    } catch (error) {
      console.error('Erro ao atualizar atividade:', error.response || error);
      return false;
    }
  },
  deleteActivity: async (id, storegeData) => {
    try {
      const response = await api.delete(
        `/delete/activity/${id}`,
        {
          headers: {
            'Authorization': `Bearer ${storegeData}`
          }
        }
      );
      return response;
    } catch (error) {
      console.error('Erro ao excluir atividade:', error);
      throw error;
    }
  },

  // Activity Student functions

  registerActivityStudent: async (activity, student, nota) => {
    try {
        const response = await api.post(
            '/register/activitystudent',
            { activity, student, nota },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error(
            'Erro ao registrar atividade do aluno:',
            error.response ? error.response.data : error.message
        );
        throw new Error('Não foi possível registrar atividade do aluno. Tente novamente mais tarde.');
    }
},

  listActivityStudentById: async (id, token) => {
    try {
      const response = await api.get(`/show/activitystudent/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return response.data
    } catch (error) {
      console.error('Erro ao listar atividade do aluno:', error);
      throw error;
    }
  },
  listAllActivityStudent: async (token) => {
    try {
      const response = await api.get('/show/all/activitystudent', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return response.data
    } catch (error) {
      console.error('Erro ao listar atividades do aluno:', error);
      throw error;
    }
  },
  updateActivityStudent: async (id, nota, activity, student) => {
    try {
      const response = await api.put(
        `/update/activitystudent/${id}`, {
          nota, activity, student
        }
      );
      return response.status === 200;
    } catch (error) {
      console.error('Erro ao atualizar atividade do aluno:', error.response || error);
      return false;
    }
  },
  deleteActivityStudent: async (id, storegeData) => {
    try {
      const response = await api.delete(
        `/delete/activitystudent/${id}`,
        {
          headers: {
            'Authorization': `Bearer ${storegeData}`
          }
        }
      );
      return response;
    } catch (error) {
      console.error('Erro ao excluir atividade do aluno:', error);
      throw error;
    }
  },

  sendEmailForgotPassword: async (to) => {
    try {
      const response = await api.post (
        `change/request-reset`, {
          to
        })
        return response;
    } catch (error) {
      console.error('Erro ao enviar email de recuperação', error)
      throw error;
    }
  }, 

  resetPassword: async (email, token, newPassword) => {
    try {
      const response = await api.patch(
          'change/reset-password',
          { email, token, newPassword }
      );
      return response;
    } catch (error) {
      console.error('Erro ao alterar a senha:', error.response || error);
      throw error;
    }
  }

})