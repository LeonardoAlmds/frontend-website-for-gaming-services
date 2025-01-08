import { createContext, useState } from 'react';
import { useApi } from '../hooks/useApi';

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
    const [students, setStudents] = useState(null);
    const api = useApi();

    const listStudents = async () => {
        if (!students) {
            const storegeData = localStorage.getItem('authToken');
            const data = await api.listStudents(storegeData);
            setStudents(data);
        }
    };
    
    const registerStudent = async (enrollment, name) => {
        const storegeData = localStorage.getItem('authToken');
        try {
            const data = await api.registerStudent(enrollment, name, storegeData);
            if (data) {
                setStudents(data);
                return true;
            }
        } catch (error) {
            console.error('Erro ao registrar aluno:', error);
        }
        return false;
    };

    const deleteStudents = async (enrollment) => {
        const storegeData = localStorage.getItem('authToken');
        try {
            const response = await api.deleteStudents(enrollment, storegeData);
            if (response.status === 200) {
                setStudents(prev => prev.filter(student => student.enrollment !== enrollment));
                return true;
            }
        } catch (error) {
            console.error('Erro ao excluir estudante:', error);
            alert('Erro ao excluir estudante');
        }
            return false;
    };

    const updateStudents = async (enrollment, name) => {
        console.log(enrollment, name)
        
        const storegeData = localStorage.getItem('authToken');
        try {
            const response = await api.updateStudents(enrollment, name, storegeData);
            if (response) {
                setStudents(prev => prev.map(resp => resp.enrollment === enrollment ? {...resp, enrollment, name} : resp));
                return true;
            } else {
                console.error('Falha na atualização do aluno');
            } 
        } catch (error) {
            console.error('Erro ao atualizar o aluno:', error);
        }
        return false;
    };

    return (
        <StudentContext.Provider
            value={{
                students,
                listStudents,
                registerStudent,
                deleteStudents,
                updateStudents,
            }}
        >
            {children}
        </StudentContext.Provider>
    );
}