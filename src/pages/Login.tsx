
import { FieldValues, } from 'react-hook-form';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { setUser, TUser } from '../redux/features/auth/authSlice';
import { useAppDispatch } from '../redux/features/hooks';
import { verifyToken } from '../utils/verifyToken';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import PhForm from '../components/form/PhForm';
import PHInputForm from '../components/form/PHInputForm';

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    // const { register, handleSubmit } = useForm({ defaultValues: { userId: '0001', password: 'admin12345' } })
    const [login, { data, error }] = useLoginMutation()
    console.log("data", data);
    console.log("error", error);
    

    const onSubmit = async (data: FieldValues) => {
        console.log("data is the", data);

        const tostId = toast.loading('Logging in ')

        try {
            const userInfo = {
                id: data.userId,
                password: data.password,
            }
            const res = await login(userInfo).unwrap()
            const user = verifyToken(res.data.accessToken) as TUser;
            console.log(user);
            dispatch(setUser({ user: user, token: res.data.accessToken }))
            if (user) {
                navigate(`/${user.role}/dashboard`);
            } else {
                console.error('User is null');
            }
            toast.success('Logged is successfully', { id: tostId, duration: 2000 })
            console.log(res)
        } catch (err) {
            console.log(err);
            toast.error('Something went wrong');
        }
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
                <PhForm onSubmit={onSubmit} >
                    <div>
                        {/* Custom input  */}
                        <PHInputForm type='text' name='userId' label='Id' placeholder='Enter your id'/>
                    </div>
                    <div>
                         {/* Custom input  */}
                        <PHInputForm type='text' name='password' label='Password' placeholder='Enter your password'/>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="mt-4 flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Login
                        </button>
                    </div>
                </PhForm>
            </div>
        </div>
    );
};

export default Login;