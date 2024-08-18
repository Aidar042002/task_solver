import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Table, Container } from 'react-bootstrap';

const AllQuestion = () => {
    const [questions, setQuestions] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:8080/task')
            .then(response => response.json())
            .then(data => setQuestions(data))
            .catch(error => console.error('Error fetching tasks:', error));
    }, []);

    return (
        <Container>
            <h2 className="my-4">All Questions</h2>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Theme</th>
                    <th>Question</th>
                    <th>Answer</th>
                </tr>
                </thead>
                <tbody>
                {questions.map((question) => (
                    <tr key={question.id}>
                        <td>{question.id}</td>
                        <td>{question.theme}</td>
                        <td>{question.question}</td>
                        <td>{question.answer}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
            <Button onClick={() => navigate('/add')} className="mt-3">Add New Question</Button>
        </Container>
    );
};

export default AllQuestion;
