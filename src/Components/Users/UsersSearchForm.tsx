import React from 'react';
import { Form, Formik, Field } from 'formik'
import { FilterType } from '../../redux/Users_Reducer';

const userSearchForm = (values: any) => {
    const errors = {}
    return errors
}

type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}
type FormType = {
    term:'',
    friend: 'true' | 'false' | "null" 
}

const UserSearchForm: React.FC<PropsType> = React.memo((props) => {
    const submit = (values: FormType, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
       const filter: FilterType ={
           term:values.term,
           friend: values.friend === "null" ? null : values.friend === "true" ? true : false
       }
        props.onFilterChanged(filter)
        setSubmitting(false)
    }
    return (
        <div>
            <Formik
                initialValues={{ term: '', friend:'null'}}
                validate={userSearchForm}
                onSubmit={submit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="text" name="term" />
                        <Field name="friend" as="select">
                            <option value="null">All</option>
                            <option value="true">Only Followed</option>
                            <option value="false">Only Unfollowed</option>
                        </Field>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
})
export default UserSearchForm