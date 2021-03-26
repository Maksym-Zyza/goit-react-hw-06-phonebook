import types from './contacts-types';

export const addContact = obj => ({
  type: types.ADD,
  payload: { ...obj },
});

export const deleteContact = id => ({
  type: types.DELETE,
  payload: id,
});

export const filterContacts = value => ({
  type: types.FILTER,
  payload: value,
});
