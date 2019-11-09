import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Gif from './Gif';

configure({adapter: new Adapter()})

let wrapper, mockGifs, mockGifRandom, mockGifTrending, mockPage, mockPagination, mockKeyword, mockKeywordChange, mockSubmit, mockPlay, mockGiftTogglePlayPause, mockSearch, mockDark, mockToggleTheme

beforeEach(() => {
  mockGifs = [
    { id: 1, name: 'Mock Gif 1', urlImage: 'image1.jpg',  urlGif: "image1.gif"},
    { id: 2, name: 'Mock Gif 2', urlImage: 'image2.jpg',  urlGif: "image2.gif"},
    { id: 3, name: 'Mock Gif 3', urlImage: 'image3.jpg',  urlGif: "image3.gif"},
  ]

  mockPage = 1
  mockKeyword = ''
  mockPlay = true
  mockSearch = false
  mockDark = true

  mockGifRandom           = jest.fn()
  mockGifTrending         = jest.fn()
  mockPagination          = jest.fn()
  mockSubmit              = jest.fn()
  mockKeywordChange       = jest.fn()
  mockGiftTogglePlayPause = jest.fn()
  mockToggleTheme         = jest.fn()
  wrapper = shallow(
    <Gif 
      gifs={mockGifs} 
      page={mockPage} 
      keyword={mockKeyword} 
      play={mockPlay}
      search={mockSearch}
      isDark={mockDark}
      onRandomButtonClick={mockGifRandom} 
      onTrendingButtonClick={mockGifTrending} 
      onPaginationButtonClick={mockPagination} 
      onSubmitClick={mockSubmit} 
      onKeywordChange={mockKeywordChange}
      onTogglePlayPauseClick={mockGiftTogglePlayPause}
      onToggleThemeClick={mockToggleTheme}
    />
  )
})

test('render <Gif />', () => {
  expect(wrapper).toBeDefined()
})

test('Gift component should have list of image as <img/>', () => {
  expect(wrapper.find('img').length).toEqual(mockGifs.length)
})

test('should call props.onGifRandom when user click random button', () => {
  const button = wrapper.find('#btn-random')
  button.simulate('click')
  const newGifs = [
    { id: 4, name: 'Mock Product 4', urlImage: 'image4.jpg',  urlGif: "image4.gif"},
  ]
  expect(mockGifs.length).not.toBe(newGifs.length)
})

test('should call props.onGifTrending when user click trending button', () => {
  const button = wrapper.find('#btn-trending')
  button.simulate('click')
  expect(mockGifs.length).toEqual(3)
})

test('should call props.onPageChange when user click pagination button', () => {
  const pagination = wrapper.find('li').last()
  const dataLastPage = { id: 3, name: 'Mock Gif 3', urlImage: 'image3.jpg',  urlGif: "image3.gif"}
  pagination.simulate('click')
  expect(mockGifs[2]).toEqual(dataLastPage)
})

test('input fields should be filled', () => {
  const q = 'ajat'
  const form = wrapper.find('form')
  expect(form.find('#q-search').length).toBe(1);

  const qInput = form.find('#q-search');
  qInput.value = q;
  expect(qInput.value).toBe('ajat');
})

test('should call props.onSubmit when user click search button', () => {
  const newGifs = [{ id: 1, name: 'Mock Gif 4', urlImage: 'image4.jpg',  urlGif: "image4.gif"}]
  const form = wrapper.find('form')
  expect(form.find('#submit').length).toBe(1);
  form.simulate('submit')
  mockGifs = newGifs
  expect(mockGifs).toBe(newGifs);
})

test('should call props.onTogglePlayPauseClick when user click play', () => {
  const btn = wrapper.find('#btn-play')
  expect(btn.length).toBe(1);
  btn.simulate('click')
  const play = !mockPlay
  expect(mockPlay).not.toBe(play);
})

test('should call props.onToggleThemeClick when user click Dark/Light', () => {
  const el = wrapper.find('.theme')
  expect(el.length).toBe(1);
  el.simulate('click')
  const isDark = !mockDark
  expect(mockDark).not.toBe(isDark);
})
