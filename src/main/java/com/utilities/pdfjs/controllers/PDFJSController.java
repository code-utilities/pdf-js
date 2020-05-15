package com.utilities.pdfjs.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class PDFJSController {

	@GetMapping("/")
	public ModelAndView index() {

		return new ModelAndView("index");
	}

	@GetMapping("/pdfjs")
	public ModelAndView pdfjs() {

		return new ModelAndView("pdfjs");
	}

	@GetMapping("/pdfjs-base64")
	public ModelAndView pdfjsbase64() {

		return new ModelAndView("pdfjs-base64");
	}

	@GetMapping("/pdfjs-viewer")
	public ModelAndView pdfjsviewer() {

		return new ModelAndView("pdfjs-viewer");
	}

	@GetMapping("/pdfjs-viewer-base64")
	public ModelAndView pdfjsviewerbase64() {

		return new ModelAndView("pdfjs-viewer-base64");
	}

}
