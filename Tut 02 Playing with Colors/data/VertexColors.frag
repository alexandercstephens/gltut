#version 330

smooth in vec4 theColor;

out vec4 outputColor;

void main()
{
	float lerpValue = (gl_FragCoord.y - 125.0f) / 250.0f;

	outputColor = mix(theColor, vec4(0.0f, 0.0f, 0.0f, 1.0f), lerpValue);
}
