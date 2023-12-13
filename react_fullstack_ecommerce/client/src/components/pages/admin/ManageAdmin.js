import React, { useEffect, useState } from "react";
import MenubarAdmin1 from "../../layout/MenubarAdmin1";
import { useSelector } from "react-redux";

import { Switch, Select, Tag, Modal } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'

import moment from "moment/min/moment-with-locales";
// eslint-disable-next-line 

//functons
import {
    listUser,
    changeStatus,
    changeRole,
    removeUser,
    resetPassword
} from "../../functions/users";

const ManageAdmin = () => {

    const { user } = useSelector((state) => ({ ...state }))
    // console.log("sdfsdfsdfsdfsd",user)

    const [data, setData] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [values, setValues] = useState({
        id: "",
        password: ""
    })
    const showModal = (id) => {
        setIsModalVisible(true);
        setValues({ ...values, id: id });
    };
    const handleChangePassword = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleOk = () => {
        setIsModalVisible(false);
        resetPassword(user.token, values.id, { values })
            .then(res => {
                console.log(res)
                loadData(user.token);
            }).catch(err => {
                console.log(err.response)
            })

    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };



    console.log(data)
    useEffect(() => {
        //code ส่งค่า user.token ไปยังใสfunctons แทนชื่อ ด้วย authtokencmo
        loadData(user.token)
        // eslint-disable-next-line
    }, [])


    //getข้อมูลมาทำเป็น array
    const loadData = (authtoken) => {
        listUser(authtoken)
            .then(res => {
                // console.log(res.data)
                setData(res.data)
            }).catch(err => {
                console.log(err)
            })
    }


    const handleOnChange = (e, id) => {

        const value = {
            id: id,
            ennabled: e
        }

        //functions update role
        changeStatus(user.token, value)
            .then(res => {
                console.log(res)
                //refresh
                loadData(user.token)
            })
            .catch(err => {
                console.log(err)
            })



        // console.log("show e and id ",value)

    }

    const handleChangeRole = (e, id) => {

        let values1 = {
            id: id,
            role: e
        }


        changeRole(user.token, values1)
            .then(res => {
                console.log(res)

                loadData(user.token)
                console.log('changerole success')
            })
            .catch(err => console.log(err))

        console.log("handleChangRole", values1)

    }

    const roleData = ["admin", "user"]

    const handleRemove = (id) => {
        if (window.confirm("Are You Sure Delete!!")) {
            removeUser(user.token, id)
                .then((res) => {
                    console.log(res);
                    loadData(user.token);
                })
                .catch((err) => {
                    console.log(err.response);
                });
        }
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <MenubarAdmin1 />
                </div>

                <div className="col">
                    <h1>ManageAdmin Page</h1>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Username</th>
                                <th scope="col">Role</th>
                                <th scope="col">Status</th>
                                <th scope="col">created</th>
                                <th scope="col">updated</th>
                                <th scope="col">actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((item, index) => (
                                    <tr>
                                        <th scope="row" key={index}>{item.username}</th>
                                        <td>

                                            <Select style={{ width: '100%' }}
                                                value={item.role}
                                                onChange={(e) => handleChangeRole(e, item._id)}
                                                key={index}
                                            >
                                                {roleData.map((item, index) => (
                                                    <Select.Option value={item} key={index}>
                                                        {item === 'admin'
                                                            ? <Tag color="green">{item}</Tag>
                                                            : <Tag color="red">{item}</Tag>

                                                        }
                                                    </Select.Option>
                                                ))}

                                            </Select>
                                        </td>
                                        <td>
                                            <Switch checked={item.ennabled} onChange={(e) => { handleOnChange(e, item._id) }} />

                                        </td>
                                        <td>
                                            {// eslint-disable-next-line 
                                                moment(item.createdAt).locale('th').format('llll')

                                            }

                                        </td>
                                        <td>
                                            {moment(item.updatedAt).locale('th').startOf(item.updatedAt).fromNow()
                                                // eslint-disable-next-line 
                                            }

                                        </td>
                                        <td><DeleteOutlined onClick={() => { handleRemove(item._id) }} />
                                            <EditOutlined onClick={() => showModal(item._id)} />
                                        </td>
                                    </tr>
                                ))
                            }



                        </tbody>
                    </table>

                    <Modal
                        title="Edit Password"
                        visible={isModalVisible}
                        onOk={handleOk}
                        onCancel={handleCancel}
                    >
                        <p>New Password :</p>
                        <input
                            onChange={handleChangePassword}
                            type="text"
                            name="password"
                        />
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default ManageAdmin;
