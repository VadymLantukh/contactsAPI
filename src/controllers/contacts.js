import createHttpError from 'http-errors';
import {
  createContact,
  deleteContact,
  getAllContacts,
  getContact,
  updateContact,
} from '../services/contacts.js';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';
import { parseSortParams } from '../utils/parseSortParams.js';
import { parseFilterParams } from '../utils/parseFilterParams.js';

export const getAllContactsController = async (req, res) => {
  const { _id: userId } = req.user;
  const { page, perPage } = parsePaginationParams(req.query);
  const { sortBy, sortOrder } = parseSortParams(req.query);
  const filter = parseFilterParams(req.query);
  filter.userId = userId;

  const contacts = await getAllContacts({
    page,
    perPage,
    sortBy,
    sortOrder,
    filter,
  });

  res.status(200).json({
    message: 'Successfully found contacts!',
    data: contacts,
  });
};

export const getContactsByIdController = async (req, res) => {
  const { contactId } = req.params;
  const { _id: userId } = req.user;
  const contact = await getContact({ _id: contactId, userId });

  if (!contact) {
    throw createHttpError(404, 'Contact not found');
  }

  res.status(200).json({
    message: `Successfully found contact with id ${contactId}!`,
    data: { contact },
  });
};

export const createContactController = async (req, res) => {
  const { _id: userId } = req.user;
  const contact = await createContact({ ...req.body, userId });

  res.status(201).json({
    status: 201,
    message: 'Successfully created a contact!',
    data: contact,
  });
};

export const updateContactController = async (req, res) => {
  const { contactId } = req.params;
  const { _id: userId } = req.user;
  const result = await updateContact(
    { _id: contactId, userId },
    { ...req.body, userId },
  );

  if (!result) {
    throw createHttpError(404, 'Contact not found');
  }

  res.status(200).json({
    status: 200,
    message: 'Successfully patched a contact!',
    data: result.contact,
  });
};

export const deleteContactByIdController = async (req, res) => {
  const { contactId } = req.params;
  const { _id: userId } = req.user;
  const student = await deleteContact({ _id: contactId, userId });

  if (!student) {
    throw createHttpError(404, 'Contact not found');
  }

  res.status(204).send();
};
