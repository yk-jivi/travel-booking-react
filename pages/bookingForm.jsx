import { useState } from "react";
import bookingStyles from '../css/booking_form.module.css';

// Кастомный хук для управления состоянием полей
function useFormFields(initialValues) {
  const [fields, setFields] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  return { fields, handleChange, setFields };
}

export default function BookingForm({ onClose }) {
  const { fields, handleChange, setFields } = useFormFields({
    fullName: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!fields.fullName.trim()) newErrors.fullName = "Введите ФИО";
    if (!/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(fields.email))
      newErrors.email = "Введите корректный email";
    if (!/^\+?\d{10,15}$/.test(fields.phone))
      newErrors.phone = "Введите корректный номер телефона";
    return newErrors;
  };

  const handleSubmit = (event) => {

    event.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setSubmitted(true);
      console.log("Форма отправлена:", fields);
      setFields({ fullName: "", email: "", phone: "" });
    }
  };

  return (
    <div className={bookingStyles.overlay}>
      <div className={bookingStyles.modal}>
        <button className={bookingStyles.closeButton} onClick={onClose}>
          ×
        </button>
        <h2 className={bookingStyles.title}>Бронирование путешествия</h2>
        {submitted ? (
          <p className={bookingStyles.success}>Заявка успешно отправлена!</p>
        ) : (
          <form onSubmit={handleSubmit} className={bookingStyles.form}>
            <label>
                <span>ФИО</span>
                <input
                    type="text"
                    name="fullName"
                    value={fields.fullName}
                    onChange={handleChange}
                    placeholder="Иванов Иван Иванович"
                />
                {errors.fullName && (<span className={bookingStyles.error}>{errors.fullName}</span>
                )}
            </label>

            <label>
                <span>Почта</span>
                <input
                    type="email"
                    name="email"
                    value={fields.email}
                    onChange={handleChange}
                    placeholder="example@mail.com"
                />
                {errors.email && (<span className={bookingStyles.error}>{errors.email}</span>
                )}
            </label>

            <label>
                <span>Телефон</span>
                <input
                    type="tel"
                    name="phone"
                    value={fields.phone}
                    onChange={handleChange}
                    placeholder="+375XXXXXXXXX"
                />
                {errors.phone && (<span className={bookingStyles.error}>{errors.phone}</span>
                )}
            </label>

            <button type="submit" className={bookingStyles.submitButton}>
                Отправить
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
