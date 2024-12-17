import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { userRouter } from './controller/user.routes';
import * as bodyParser from 'body-parser';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { employeeRouter } from './controller/employee.routes';
import { clientRouter } from './controller/client.routes';
import { calendarRouter } from './controller/calendar.routes';
import { appointmentRouter } from './controller/appointment.routes';
//import { employeeRouter } from './controller/employee.routes';

const app = express();
dotenv.config();
const port = process.env.APP_PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/users', userRouter);

// Register the employee router
//app.use('/employees', employeeRouter);

app.get('/status', (req, res) => {
    res.json({ message: 'Back-end is running...' });
});

app.use('/employee', employeeRouter);
app.use('/client', clientRouter);
app.use('/calendar', calendarRouter);
app.use('/appointment', appointmentRouter);

const swaggerOpts = {
    definition: {
        openai: '3.0.0',
        info: {
            title: 'Courses API',
            version: '1.0.0',
        },
        components: {
            schemas: {},
        }
    },
    apis: ['./controller/*.routes.ts'],
};

const swaggerSpec = swaggerJSDoc(swaggerOpts);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port || 3000, () => {
    console.log(`Back-end is running on port ${port}.`);
});
