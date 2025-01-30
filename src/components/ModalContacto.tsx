import { Modal, ModalContent, ModalHeader, ModalBody, Input, ModalFooter, Button, Textarea, Form } from '@nextui-org/react';
import { FC, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

type ModalContactoProps = {
    isOpen: boolean
    onOpenChange: () => void
}

const ModalContacto: FC<ModalContactoProps> = ({ isOpen, onOpenChange }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState({
        nombre: "",
        email: "",
        telefono: "",
        mensaje: ""
    })


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            e.currentTarget,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ).then(() => {
            setIsLoading(false)
            Swal.fire({
                title: 'Enviado',
                text: 'Su mensaje se ha enviado exitosamente',
                icon: 'success',
                showConfirmButton: false,
                timer: 2200
            });
            setForm({
                nombre: "",
                email: "",
                telefono: "",
                mensaje: ""
            });
            onOpenChange();
        }, () => {
            setIsLoading(false)
            Swal.fire({
                title: 'Error',
                text: 'Su mensaje no ha podido ser enviado, por favor intente más tarde',
                icon: 'error',
                showConfirmButton: false,
                timer: 2200
            });
        });
    };




    return (
        <Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}>
            <Form onSubmit={handleSubmit} validationBehavior="native">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Contactame</ModalHeader>
                            <ModalBody>
                                <Input
                                    isRequired
                                    errorMessage="Por favor ingrese el nombre"
                                    label="Nombre:"
                                    labelPlacement="outside"
                                    placeholder="Ej: Sebastian Chico"
                                    variant="flat"
                                    type='text'
                                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                                    name='user_name'
                                    value={form.nombre}
                                />
                                <Input
                                    isRequired
                                    errorMessage="Porfavor ingrese el correo"
                                    label="Correo electronico:"
                                    labelPlacement="outside"
                                    placeholder="Ej: exampleemail@hotmail.com"
                                    variant="flat"
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    name='user_email'
                                    type='email'
                                />
                                <label className="text-sm">Numero de contacto:<span style={{ color: '#f31260' }}> *</span></label>
                                <PhoneInput
                                    required
                                    placeholder="+00 123 4567 890"
                                    className="rounded-2xl bg-[#f4f4f5] py-2 px-4"
                                    numberInputProps={{
                                        style: { backgroundColor: '#f4f4f5', border: 'none', outline: 'none', width: '100%' }
                                    }}
                                    onChange={(value) => {
                                        if (value) {
                                            setForm({ ...form, telefono: value });
                                        }
                                    }}
                                    name="user_phone"
                                    value={form.telefono}
                                    type='text'
                                />
                                <Textarea
                                    isRequired
                                    errorMessage="Por favor ingrese su mensaje"
                                    label="Mensaje:"
                                    labelPlacement="outside"
                                    placeholder=" "
                                    variant="flat"
                                    onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                                    name='message'
                                    value={form.mensaje}
                                    type='textarea'
                                />
                            </ModalBody>
                            <ModalFooter className='flex justify-center'>
                                <Button color="danger" variant="flat" onPress={() => {
                                    onClose();
                                    setForm({
                                        nombre: "",
                                        email: "",
                                        telefono: "",
                                        mensaje: ""
                                    });
                                }}>
                                    Cerrar
                                </Button>
                                <Button color="primary" type="submit" isLoading={isLoading}>
                                    {isLoading ? 'Enviando...' : 'Enviar'}
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Form>
        </Modal>
    );
}

export { ModalContacto };
